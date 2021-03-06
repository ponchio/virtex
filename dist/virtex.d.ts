// virtex v0.2.7 https://github.com/edsilv/virtex#readme
/// <reference path="../node_modules/typescript/lib/lib.es6.d.ts" />
/// <reference types="three" />
declare var global: any;
declare var Stats: any;
interface Document {
    mozFullScreen: boolean;
    msFullscreenElement: any;
    msExitFullscreen: any;
    mozCancelFullScreen: any;
}
declare module THREE {
    class MTLLoader {
        constructor(manager?: LoadingManager);
        manager: LoadingManager;
        load(url: string, onLoad?: (object: Object3D) => void, onProgress?: (xhr: ProgressEvent) => void, onError?: (xhr: ErrorEvent) => void): void;
        setCrossOrigin(crossOrigin: string): void;
        setMaterials(materials: any): void;
        setPath(path: string): void;
    }
    class GLTFLoader {
        constructor(manager?: LoadingManager);
        manager: LoadingManager;
        load(url: string, onLoad?: (object: Object3D) => void, onProgress?: (xhr: ProgressEvent) => void, onError?: (xhr: ErrorEvent) => void): void;
        setCrossOrigin(crossOrigin: string): void;
        static Animations: any;
        static Shaders: any;
    }
    class DRACOLoader {
        constructor(manager?: LoadingManager);
        manager: LoadingManager;
        load(url: string, onLoad?: (object: Object3D) => void, onProgress?: (xhr: ProgressEvent) => void, onError?: (xhr: ErrorEvent) => void): void;
        setCrossOrigin(crossOrigin: string): void;
    }
    class OBJLoader {
        constructor(manager?: LoadingManager);
        manager: LoadingManager;
        load(url: string, onLoad?: (object: Object3D) => void, onProgress?: (xhr: ProgressEvent) => void, onError?: (xhr: ErrorEvent) => void): void;
        setCrossOrigin(crossOrigin: string): void;
        setMaterials(materials: any): void;
    }
}

declare namespace Virtex {
    class StringValue {
        value: string;
        constructor(value?: string);
        toString(): string;
    }
}

declare namespace Virtex {
    class FileType extends StringValue {
        static DRACO: FileType;
        static GLTF: FileType;
        static OBJ: FileType;
        static THREEJS: FileType;
    }
}

declare namespace Virtex {
    class DRACOFileTypeHandler {
        static setup(viewport: Viewport, obj: any): void;
    }
}

declare namespace Virtex {
    class glTFFileTypeHandler {
        static setup(viewport: Viewport, obj: any): void;
    }
}

/// <reference types="three" />
declare namespace Virtex {
    interface IVirtexData {
        alpha: boolean;
        ambientLightColor?: number;
        ambientLightIntensity?: number;
        antialias: boolean;
        cameraZ?: number;
        directionalLight1Color?: number;
        directionalLight1Intensity?: number;
        directionalLight2Color?: number;
        directionalLight2Intensity?: number;
        element?: string;
        fadeSpeed?: number;
        far?: number;
        file: string;
        fullscreenEnabled?: boolean;
        maxZoom?: number;
        minZoom?: number;
        near?: number;
        shading?: THREE.Shading;
        showStats?: boolean;
        type: FileType;
        vrBackgroundColor: number;
        zoomSpeed?: number;
    }
}

declare namespace Virtex {
    class ObjFileTypeHandler {
        static setup(viewport: Viewport, obj: any, objpath: string): void;
    }
}

declare namespace Virtex {
    class ThreeJSFileTypeHandler {
        static setup(viewport: Viewport, obj: any): void;
    }
}

/// <reference types="three" />
declare var requestAnimFrame: (callback: FrameRequestCallback) => number;
declare namespace Virtex {
    class Viewport extends _Components.BaseComponent {
        options: _Components.IBaseComponentOptions;
        private _$viewport;
        private _$loading;
        private _$loadingBar;
        private _$oldie;
        private _lightGroup;
        private _prevCameraPosition;
        private _prevCameraRotation;
        private _renderer;
        private _stats;
        private _viewportCenter;
        camera: THREE.PerspectiveCamera;
        objectGroup: THREE.Group;
        scene: THREE.Scene;
        private _isFullscreen;
        private _isMouseDown;
        private _isVRMode;
        private _lastHeight;
        private _lastWidth;
        private _mousePos;
        private _mousePosOnMouseDown;
        private _pinchStart;
        private _targetRotationOnMouseDown;
        private _targetRotation;
        private _targetZoom;
        private _vrControls;
        private _vrEffect;
        private _vrEnabled;
        constructor(options: _Components.IBaseComponentOptions);
        protected _init(): boolean;
        data(): IVirtexData;
        private _getVRDisplay();
        private _createLights();
        createCamera(): void;
        private _createRenderer();
        private _createControls();
        private _createEventListeners();
        private _loadObject(objectPath);
        private _getBoundingBox();
        private _getBoundingWidth();
        private _getBoundingHeight();
        private _getCameraZ();
        private _getFov();
        private _loadProgress(progress);
        private _fullscreenChanged();
        private _onMouseDown(event);
        private _onMouseMove(event);
        private _onMouseUp();
        private _onMouseOut();
        private _onMouseWheel(event);
        private _onTouchStart(event);
        private _onTouchMove(event);
        private _onTouchEnd();
        private _tick();
        rotateY(radians: number): void;
        private _update();
        private _draw();
        private _getWidth();
        private _getHeight();
        private _getZoomSpeed();
        private _getMaxZoom();
        private _getMinZoom();
        zoomIn(): void;
        zoomOut(): void;
        enterVR(): void;
        exitVR(): void;
        toggleVR(): void;
        enterFullscreen(): void;
        exitFullscreen(): void;
        private _getRequestFullScreen(elem);
        private _getExitFullScreen();
        private _getAspectRatio();
        resize(): void;
        protected _resize(): void;
    }
    class Events {
        static LOADED: string;
    }
}
