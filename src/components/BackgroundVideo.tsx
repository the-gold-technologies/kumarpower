import React, { useEffect, useRef, useState, useCallback } from "react";
import { Volume2, VolumeX } from "lucide-react";

// Extend Window interface to include YouTube API
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const BackgroundVideo = () => {
  const playerRef = useRef<any>(null);
  const [videoMuted, setVideoMuted] = useState(true);
  const [apiReady, setApiReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Generate unique ID for this component instance
  const playerId = useRef(`yt-player-${Math.random().toString(36).substr(2, 9)}`);

  const initializePlayer = useCallback(() => {
    if (!apiReady || !window.YT || !window.YT.Player) return;

    // Destroy existing player if it exists
    if (playerRef.current && typeof playerRef.current.destroy === 'function') {
      playerRef.current.destroy();
    }

    try {
      playerRef.current = new window.YT.Player(playerId.current, {
        videoId: "FZGwh-hlDH4",
        playerVars: {
          autoplay: 1,
          mute: 1, 
          controls: 0,
          rel: 0,
          loop: 1,
          playlist: "FZGwh-hlDH4",
          modestbranding: 1,
          fs: 0,
          disablekb: 1,
          iv_load_policy: 3,
          playsinline: 1,
          enablejsapi: 1,
        },
        events: {
          onReady: (event: any) => {
            event.target.playVideo();
            // Apply current mute state after player is ready
            if (videoMuted) {
              event.target.mute();
            } else {
              event.target.unMute();
            }
          },
          onStateChange: (event: any) => {
            // Ensure video keeps playing
            if (event.data === window.YT.PlayerState.ENDED) {
              event.target.playVideo();
            }
          },
        },
      });
    } catch (error) {
      console.error('Failed to initialize YouTube player:', error);
    }
  }, [apiReady]); // Removed videoMuted from dependencies

  useEffect(() => {
    // Check if YouTube API is already loaded
    if (window.YT && window.YT.Player) {
      setApiReady(true);
      return;
    }

    // Check if script is already being loaded
    if (document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
      // Script exists, wait for it to load
      const checkAPI = setInterval(() => {
        if (window.YT && window.YT.Player) {
          setApiReady(true);
          clearInterval(checkAPI);
        }
      }, 100);
      
      return () => clearInterval(checkAPI);
    }

    // Load YouTube IFrame API
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    tag.async = true;
    document.head.appendChild(tag);

    // Set up global callback
    const originalCallback = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      setApiReady(true);
      // Call original callback if it existed
      if (originalCallback && typeof originalCallback === 'function') {
        originalCallback();
      }
    };

    return () => {
      // Cleanup: restore original callback
      if (originalCallback) {
        window.onYouTubeIframeAPIReady = originalCallback;
      }
    };
  }, []);

  useEffect(() => {
    if (apiReady) {
      initializePlayer();
    }

    return () => {
      // Cleanup player on unmount
      if (playerRef.current && typeof playerRef.current.destroy === 'function') {
        try {
          playerRef.current.destroy();
        } catch (error) {
          console.error('Error destroying YouTube player:', error);
        }
      }
    };
  }, [initializePlayer]);

  // Handle mute state changes without recreating the player
  useEffect(() => {
    if (playerRef.current && typeof playerRef.current.mute === 'function') {
      if (videoMuted) {
        playerRef.current.mute();
      } else {
        playerRef.current.unMute();
      }
    }
  }, [videoMuted]);

  // Mute/unmute button handler
  const handleMuteToggle = () => {
    // Just toggle the state - the useEffect will handle the actual mute/unmute
    setVideoMuted(!videoMuted);
  };

  return (
    <div className="absolute inset-0 w-full h-full -translate-y-5 overflow-hidden" ref={containerRef}>
      {/* YouTube Video */}
      <div id={playerId.current} className="absolute inset-0 w-full h-full" />

      {/* Mute/Unmute Button - Fixed position, larger size, high visibility with maximum z-index */}
      <div className="fixed inset-0 pointer-events-none z-[9999]">
        <button
          onClick={handleMuteToggle}
          className="absolute bottom-2 md:bottom-32 md:right-28 bg-black bg-opacity-60 hover:bg-opacity-80 text-white p-4 rounded-full pointer-events-auto transition-all duration-200 hover:scale-110 shadow-2xl"
          aria-label={videoMuted ? "Unmute video" : "Mute video"}
        >
          {videoMuted ? (
            <VolumeX size={32} className="text-white" />
          ) : (
            <Volume2 size={32} className="text-white" />
          )}
        </button>
      </div>

      {/* Overlays to hide YouTube UI */}
      <div className="absolute top-0 left-0 w-full h-[55px] md:h-[55px] bg-black z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-[55px] bg-black z-10"></div>
      <div className="absolute top-[40px] right-0 w-[100px] h-[40px] bg-black z-10"></div>
    </div>
  );
};

export default BackgroundVideo;
