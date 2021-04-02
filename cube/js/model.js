(function () {

    'use strict';

    // Global Constants
    const canvas = document.querySelector('#liquidCube'),
        fov = 45,
        aspect = 2,
        near = 0.1,
        far = 100;

    // Global Vars
    let scene,
        renderer,
        camera,
        controls, 
        model,
        liquid,
        light,
        liquidEnvMap;

    // Load the model if the page contains our canvas
    if (canvas) {
        loadModel();
    }

    // Load the model
    function loadModel() {

        // Create needed loaders for our draco compressed gltf file
        const gltfLoader = new THREE.GLTFLoader();

        // Load the model
        gltfLoader.load('/models/model.gltf', function(gltf) {
            
            model = gltf.scene; 
            liquid = model.children[1];
            liquidEnvMap = new THREE.CubeTextureLoader()
            .setPath( '/models/liquidMap/' )
            .load( [ 'nx.png', 'ny.png', 'nz.png', 'px.png', 'py.png', 'pz.png' ] );
            liquidEnvMap.mapping = THREE.CubeRefractionMapping;
                    
            let cube = model.children[0],
                textureLoader = new THREE.TextureLoader(),
                wood = textureLoader.load('/models/textures/wood.png'),
                woodAo = textureLoader.load('/models/textures/wood_ao.png'),
                woodNormal = textureLoader.load('/models/textures/wood_normal.png'),
                woodRough = textureLoader.load('/models/textures/wood_rough.png'),
                woodBump = textureLoader.load('/models/textures/wood_bump.png'),
                liquidMaterial = new THREE.MeshPhongMaterial( {
                    color: 0xfff6dd,
                    envMap: liquidEnvMap, 
                    flatShading: false,
                    refractionRatio: .4,
                    opacity: .5,
                    reflectivity: 1,
                    transparent: true,
                }),
                cubeGeometry = new THREE.BoxGeometry(2,2,2);
            
            // Create new materials for each side of the cube
            const materialArray = [
                new THREE.MeshStandardMaterial( {
                    map: wood,
                    bumpMap: woodBump,
                    roughnessMap: woodRough,
                    normalMap: woodNormal,
                    aoMap: woodAo,
                    roughness: 1,
                    bumpScale: .2,
                    metalness: 0
                } ),
                new THREE.MeshStandardMaterial( { 
                    map: wood,
                    bumpMap: woodBump,
                    roughnessMap: woodRough,
                    normalMap: woodNormal,
                    aoMap: woodAo,
                    roughness: 1,
                    bumpScale: .2,   
                    metalness: 0
                } ),
                new THREE.MeshStandardMaterial( { 
                    map: wood,
                    bumpMap: woodBump,
                    roughnessMap: woodRough,
                    aoMap: woodAo,
                    roughness: 1,
                    bumpScale: .02,
                    metalness: 0
                } ),
                new THREE.MeshStandardMaterial( { 
                    map: wood,
                    bumpMap: woodBump,
                    roughnessMap: woodRough,
                    normalMap: woodNormal,
                    aoMap: woodAo,
                    roughness: 1,
                    bumpScale: .2,   
                    metalness: 0
                } ),
                new THREE.MeshStandardMaterial( { 
                    map: wood,
                    bumpMap: woodBump,
                    roughnessMap: woodRough,
                    normalMap: woodNormal,
                    aoMap: woodAo,
                    roughness: 1,
                    bumpScale: 1,   
                    metalness: 0
                } ),

                new THREE.MeshStandardMaterial( { 
                    map: wood,
                    bumpMap: woodBump,
                    roughnessMap: woodRough,
                    normalMap: woodNormal,
                    aoMap: woodAo,
                    roughness: 1,
                    bumpScale: 1,   
                    metalness: 0
                } )
            ]; 

            // Update cube geometry and Add 6 materials for each side of the cube
            cube.geometry = cubeGeometry;
            cube.material = materialArray;
            cube.position.y = 2;

            // Update liquid material
            liquid.material = liquidMaterial;

            // Initialize the scene
            init();

        });
    }

    // Initalize the scene
    function init() {

        // Scene
        scene = new THREE.Scene();
        model.scale.set(1.8,1.8,1.8);
        scene.add(model); 

        // Camera
        camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        camera.position.set(0, 10, 15);
        scene.add( camera ); 
        
        // Lights
        light = new THREE.DirectionalLight(0xfce3c8, 2);
        light.position.set(5, 5, 2);
        light.target.position.set(-1, 0, 0);
        scene.add(light);
        scene.add(light.target);
        camera.add(light); 

        // Controls
        controls = new THREE.OrbitControls(camera, canvas, model);
        controls.autoRotate = true;
        controls.autoRotateSpeed = 3;
        controls.enableZoom = false;

        // Disable rotation on y axis
        controls.minPolarAngle = 1.5;
        controls.maxPolarAngle = 2;
        controls.target.set(0, 5, 0);

        // Detect mouse movement within the canvas
        canvas.addEventListener('mousemove', onDocumentMouseMove, false);

        // Renderer
        renderer = new THREE.WebGLRenderer({canvas: canvas, alpha: true, antialias: true});
        renderer.setClearColor( 0x000000, 0 );

        // Render the scene
        requestAnimationFrame(render);

        // Show the canvas element
        canvas.classList.add('visible');

    }

    // Rotate the camera based on mouse movement within the canvas
    function onDocumentMouseMove( event ) { 

        // Manually fire the event in OrbitControls
        controls.handleMouseMoveRotate(event);

    }

    function resizeRendererToDisplaySize(renderer) {
        
        const canvas = renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
            renderer.setSize(width, height, false);
        }

        return needResize;
    }

    function render() {

        if (resizeRendererToDisplaySize(renderer)) {
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
        }

        if (canvas.clientWidth < 545) {
            model.scale.set(1.5, 1.5, 1.5); 
        } else {
            model.scale.set(1.8, 1.8, 1.8); 
        }

        renderer.gammaInput = true;
        renderer.gammaOutput = true;
        renderer.render(scene, camera);
        controls.update();
        requestAnimationFrame(render);

    }

})();