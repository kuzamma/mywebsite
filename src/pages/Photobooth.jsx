import React, { useRef, useState, useEffect } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import * as fabric from "fabric";


import EmojiPicker from 'emoji-picker-react';
import { 
  FaCamera, FaDownload, FaRedo, FaMagic, FaRegLaughBeam,
  FaImage, FaPalette, FaSmile, FaFont, FaBorderAll
} from 'react-icons/fa';

const Photobooth = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const fabricCanvasRef = useRef(null);
  const [hasPhoto, setHasPhoto] = useState(false);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('none');
  const [countdown, setCountdown] = useState(0);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [customText, setCustomText] = useState('');
  const [showTextInput, setShowTextInput] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [showColorPicker, setShowColorPicker] = useState(false);

  const filters = [
    { name: 'none', label: 'Normal' },
    { name: 'grayscale(100%)', label: 'Grayscale' },
    { name: 'sepia(100%)', label: 'Sepia' },
    { name: 'invert(100%)', label: 'Invert' },
    { name: 'hue-rotate(90deg)', label: 'Funky' },
    { name: 'brightness(150%)', label: 'Bright' }
  ];

  const templates = [
    {
      id: 'simple',
      name: 'Simple Border',
      overlay: {
        type: 'border',
        style: '20px solid white'
      }
    },
    {
      id: 'polaroid',
      name: 'Polaroid',
      overlay: {
        type: 'frame',
        padding: '40px',
        bottomPadding: '80px'
      }
    },
    {
      id: 'split',
      name: '2x2 Grid',
      overlay: {
        type: 'grid',
        rows: 2,
        cols: 2
      }
    },
    {
      id: 'vintage',
      name: 'Vintage',
      overlay: {
        type: 'frame',
        filter: 'sepia(50%)',
        border: '10px solid #d4af37'
      }
    }
  ];

  useEffect(() => {
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  useEffect(() => {
    if (hasPhoto && canvasRef.current) {
      initFabricCanvas();
    }
  }, [hasPhoto]);

  const initFabricCanvas = () => {
    if (!fabricCanvasRef.current) {
      const canvas = canvasRef.current;
      fabricCanvasRef.current = new fabric.Canvas(canvas);
      
      // Set canvas dimensions to match the photo
      fabricCanvasRef.current.setDimensions({
        width: canvas.width,
        height: canvas.height
      });
    }
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          facingMode: 'user',
          width: { ideal: 1280 },
          height: { ideal: 720 }
        }, 
        audio: false 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.onloadedmetadata = () => {
          videoRef.current.play();
          setIsCameraActive(true);
          setError(null);
        };
      }
    } catch (err) {
      setError('Unable to access camera. Please make sure you have granted camera permissions.');
      console.error('Error accessing camera:', err);
    }
  };

  const startCountdown = () => {
    setCountdown(3);
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          takePhoto();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const takePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (!video || !canvas) return;

    const width = video.videoWidth;
    const height = video.videoHeight;

    canvas.width = width;
    canvas.height = height;

    const context = canvas.getContext('2d');
    if (!context) return;

    // Apply selected filter
    context.filter = filter;
    context.drawImage(video, 0, 0, width, height);

    // Apply selected template
    if (selectedTemplate) {
      applyTemplate(context, width, height);
    }

    setHasPhoto(true);
    initFabricCanvas();
  };

  const applyTemplate = (context, width, height) => {
    const template = templates.find(t => t.id === selectedTemplate);
    if (!template) return;

    switch (template.overlay.type) {
      case 'border':
        context.strokeStyle = 'white';
        context.lineWidth = 20;
        context.strokeRect(0, 0, width, height);
        break;
      case 'frame':
        const padding = template.overlay.padding || 20;
        context.fillStyle = 'white';
        context.fillRect(0, 0, width, padding); // Top
        context.fillRect(0, height - padding, width, padding); // Bottom
        context.fillRect(0, 0, padding, height); // Left
        context.fillRect(width - padding, 0, padding, height); // Right
        break;
      case 'grid':
        const { rows = 2, cols = 2 } = template.overlay;
        const cellWidth = width / cols;
        const cellHeight = height / rows;
        context.strokeStyle = 'white';
        context.lineWidth = 2;
        
        // Draw vertical lines
        for (let i = 1; i < cols; i++) {
          context.beginPath();
          context.moveTo(i * cellWidth, 0);
          context.lineTo(i * cellWidth, height);
          context.stroke();
        }
        
        // Draw horizontal lines
        for (let i = 1; i < rows; i++) {
          context.beginPath();
          context.moveTo(0, i * cellHeight);
          context.lineTo(width, i * cellHeight);
          context.stroke();
        }
        break;
    }
  };

  const addEmoji = (emojiData) => {
    if (!fabricCanvasRef.current) return;

    const text = new fabric.Text(emojiData.emoji, {
      left: 100,
      top: 100,
      fontSize: 40,
      selectable: true
    });

    fabricCanvasRef.current.add(text);
    fabricCanvasRef.current.renderAll();
    setShowEmojiPicker(false);
  };

  const addCustomText = () => {
    if (!fabricCanvasRef.current || !customText) return;

    const text = new fabric.Text(customText, {
      left: 100,
      top: 100,
      fontSize: 30,
      fill: '#ffffff',
      fontFamily: 'Arial',
      selectable: true
    });

    fabricCanvasRef.current.add(text);
    fabricCanvasRef.current.renderAll();
    setCustomText('');
    setShowTextInput(false);
  };

  const setBackgroundImage = (e) => {
    const file = e.target.files[0];
    if (!file || !fabricCanvasRef.current) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      fabric.Image.fromURL(event.target.result, (img) => {
        img.scaleToWidth(fabricCanvasRef.current.width);
        fabricCanvasRef.current.setBackgroundImage(
          img, 
          fabricCanvasRef.current.renderAll.bind(fabricCanvasRef.current)
        );
      });
    };
    reader.readAsDataURL(file);
  };

  const retakePhoto = () => {
    if (fabricCanvasRef.current) {
      fabricCanvasRef.current.dispose();
      fabricCanvasRef.current = null;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    context.clearRect(0, 0, canvas.width, canvas.height);
    setHasPhoto(false);
    setSelectedTemplate(null);
  };

  const downloadPhoto = () => {
    if (!fabricCanvasRef.current) return;

    const dataUrl = fabricCanvasRef.current.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = `photobooth-${new Date().toISOString()}.png`;
    link.click();
  };

  return (
    <div className="page-container">
      <AnimatedSection>
        <h1 className="section-title">Photobooth</h1>
        <p className="text-lg text-gray-700 mb-8">
          Strike a pose, make a face, or just be your awesome self! 
          Now with templates, emojis, and more customization options!
        </p>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Camera/Preview Section */}
          <div className="card overflow-hidden">
            <div className="relative">
              {!isCameraActive && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg min-h-[300px]">
                  <button 
                    onClick={startCamera}
                    className="btn btn-primary flex items-center gap-2"
                  >
                    <FaCamera /> Start Camera
                  </button>
                </div>
              )}
              <video 
                ref={videoRef}
                autoPlay 
                playsInline
                style={{ filter, display: isCameraActive ? 'block' : 'none' }}
                className="w-full rounded-lg"
              />
              {countdown > 0 && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                  <span className="text-6xl text-white font-bold animate-bounce">
                    {countdown}
                  </span>
                </div>
              )}
            </div>

            {/* Camera Controls */}
            {isCameraActive && !hasPhoto && (
              <div className="mt-4 space-y-4">
                {/* Filter Selection */}
                <div className="flex flex-wrap gap-2">
                  {filters.map((f) => (
                    <button
                      key={f.name}
                      onClick={() => setFilter(f.name)}
                      className={`px-3 py-1 rounded-full text-sm ${
                        filter === f.name 
                          ? 'bg-primary text-white' 
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>

                {/* Template Selection */}
                <div className="space-y-2">
                  <h3 className="font-medium text-gray-700 flex items-center gap-2">
                    <FaBorderAll /> Select Template
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {templates.map((template) => (
                      <button
                        key={template.id}
                        onClick={() => setSelectedTemplate(template.id)}
                        className={`px-3 py-1 rounded-full text-sm ${
                          selectedTemplate === template.id
                            ? 'bg-secondary text-white'
                            : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                      >
                        {template.name}
                      </button>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={startCountdown}
                  className="btn btn-primary w-full flex items-center justify-center gap-2"
                >
                  <FaCamera /> Take Photo
                </button>
              </div>
            )}
          </div>

          {/* Canvas/Edit Section */}
          <div className="card overflow-hidden">
            <canvas 
              ref={canvasRef}
              className="w-full rounded-lg bg-gray-100 min-h-[300px]"
            />
            
            {hasPhoto && (
              <div className="mt-4 space-y-4">
                {/* Editing Tools */}
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                    className="btn btn-secondary flex items-center gap-2"
                  >
                    <FaSmile /> Add Emoji
                  </button>
                  <button
                    onClick={() => setShowTextInput(!showTextInput)}
                    className="btn btn-secondary flex items-center gap-2"
                  >
                    <FaFont /> Add Text
                  </button>
                  <label className="btn btn-secondary flex items-center gap-2 cursor-pointer">
                    <FaImage /> Background
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={setBackgroundImage}
                    />
                  </label>
                  <button
                    onClick={() => setShowColorPicker(!showColorPicker)}
                    className="btn btn-secondary flex items-center gap-2"
                  >
                    <FaPalette /> Color
                  </button>
                </div>

                {/* Emoji Picker */}
                {showEmojiPicker && (
                  <div className="relative z-50">
                    <EmojiPicker
                      onEmojiClick={addEmoji}
                      width="100%"
                      height="300px"
                    />
                  </div>
                )}

                {/* Text Input */}
                {showTextInput && (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={customText}
                      onChange={(e) => setCustomText(e.target.value)}
                      placeholder="Enter your text"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-md"
                    />
                    <button
                      onClick={addCustomText}
                      className="btn btn-primary"
                    >
                      Add
                    </button>
                  </div>
                )}

                {/* Color Picker */}
                {showColorPicker && (
                  <div className="flex gap-2">
                    <input
                      type="color"
                      value={backgroundColor}
                      onChange={(e) => {
                        setBackgroundColor(e.target.value);
                        if (fabricCanvasRef.current) {
                          fabricCanvasRef.current.backgroundColor = e.target.value;
                          fabricCanvasRef.current.renderAll();
                        }
                      }}
                      className="w-full h-10 cursor-pointer"
                    />
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button 
                    onClick={retakePhoto}
                    className="btn btn-secondary flex-1 flex items-center justify-center gap-2"
                  >
                    <FaRedo /> Retake
                  </button>
                  <button 
                    onClick={downloadPhoto}
                    className="btn btn-primary flex-1 flex items-center justify-center gap-2"
                  >
                    <FaDownload /> Download
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <AnimatedSection delay={0.3} className="mt-12">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <FaMagic className="text-2xl text-primary mr-2" />
              <h2 className="text-2xl font-bold">Pro Tips</h2>
            </div>
            <ul className="text-gray-700 space-y-2 max-w-2xl mx-auto">
              <li>• Choose a template before taking your photo for the best results</li>
              <li>• Add emojis and text to make your photos more fun and expressive</li>
              <li>• Try different filters to change the mood of your photo</li>
              <li>• Use the background color or image to create unique effects</li>
              <li>• Have fun with the customization options! <FaRegLaughBeam className="inline text-primary" /></li>
            </ul>
          </div>
        </AnimatedSection>
      </AnimatedSection>
    </div>
  );
};

export default Photobooth;