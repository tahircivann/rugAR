import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src: string;
          'camera-controls'?: boolean;
          'auto-rotate'?: boolean;
          'ar'?: boolean;
          'ar-modes'?: string;
          'ios-src'?: string;
          'environment-image'?: string;
          exposure?: string;
          'shadow-intensity'?: string;
          'animation-name'?: string;
          'interaction-prompt'?: string;
        },
        HTMLElement
      >;
    }
  }
}

interface ModelViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModelViewer({ isOpen, onClose }: ModelViewerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative w-full max-w-4xl h-[80vh] bg-white rounded-lg p-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <model-viewer
          src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
          ios-src="https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
          camera-controls
          auto-rotate
          ar
          ar-modes="webxr scene-viewer quick-look"
          environment-image="neutral"
          exposure="1"
          shadow-intensity="1"
          interaction-prompt="auto"
          class="w-full h-full"
        >
          <button
            slot="ar-button"
            className="absolute bottom-4 right-4 bg-[#ff4d31] text-white px-6 py-3 rounded-lg"
          >
            View in AR
          </button>
        </model-viewer>
      </div>
    </div>
  );
}