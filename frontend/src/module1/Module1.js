import React,{useEffect} from 'react'
import "./Module1.css"
import * as THREE from 'three'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import filepath from './../models/gaganyaan vehicle.glb'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFingerprint, faKeyboard, faMouse, faPlus} from "@fortawesome/free-solid-svg-icons"
import {useDispatch} from "react-redux"
import {model1ACT} from "../features/percentageState"
export const Module1 = () => {
    const dispatch = useDispatch();
    useEffect(()=>
    {
        animation();
        document.getElementById("instuctionScreen").style.display = "none";
        document.getElementById("mobileInstructions").style.display = "none";
    },[])
    const animation=()=> {
        let hemiLight, spotlight, model;
        const scene = new THREE.Scene()
        // const imageLoader = new THREE.TextureLoader();
        // imageLoader.load('https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg',(texture)=>{

        //     // scene.background = null;
        //     scene.background = texture;
        //     // scene.background.covered = true;
        // })
        // // scene.background = new THREE.Color('grey');
        const imageLoader = new THREE.TextureLoader();
        const texture = imageLoader.load(
      'https://cdn.eso.org/images/publicationjpg/uhd_img7796pv2_cc_eq.jpg',
      () => {
        const rt = new THREE.WebGLCubeRenderTarget(texture.image.height);
        rt.fromEquirectangularTexture(renderer, texture);
        scene.background = rt.texture;
      });

        //!GLTF importing
        const loader = new GLTFLoader();
        loader.load(filepath,function(gltf){
            // console.log(gltf);
            model = gltf.scene
            model.scale.set(1,1,1)
            model.rotation.set(0,0,0)
            model.position.y = -3;
            scene.add(model);
        }, (xhr) => {
            // console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
            let loadNumber = (xhr.loaded/xhr.total*100).toString().slice(0,3);
            dispatch(model1ACT(loadNumber))
//             const string = "0123456789";
// console.log(string.slice(0, 2)); // "01"    
            document.getElementById("loaderpercent").innerHTML = `${loadNumber+'%'}`
            document.getElementById("loaderRender").value = (loadNumber === "Inf" ? 100 :parseInt(loadNumber));
            if (loadNumber === "Inf") document.getElementById("loadersSec").style.display = 'none'; 
            const loaderDoc = document.getElementById("loadersSec");
            if (loaderDoc !== null || loaderDoc !== undefined) {
                if (loadNumber === "Inf" || loadNumber==="100") 
                {
                    document.getElementById("loadersSec").style.display = 'none';
                    document.getElementById("instuctionScreen").style.display = "";
                    document.getElementById("mobileInstructions").style.display = "";
                }

            }
        }, (error)=>{
            console.log(error);
        })
    
        const light = new THREE.DirectionalLight(0xffffff, 1)
        light.position.set(2,2,0)
        scene.add(light)
        // scene.add(new THREE.AxesHelper(500))
        const camera = new THREE.PerspectiveCamera(window.innerWidth >400 ?50 :45, window.innerWidth/480, 0.1, 1000)
        
        //lighting
        var width = 100;
        var height = 100;
        var intensity = 2;
        var rectLight = new THREE.RectAreaLight( 0xffffff, intensity,  width, height );
        rectLight.position.set( 1, 1, 10 );
        rectLight.lookAt( 1, 1, 3 );
        scene.add( rectLight )
        
        //hemilighting
        hemiLight = new THREE.HemisphereLight(0xffeeb1,0x080820,2);
        scene.add(hemiLight);
        spotlight = new THREE.SpotLight(0xffa95c, 4);
        spotlight.castShadow = true;
        scene.add(spotlight);

        //rendering
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth-16,480);

        //lighting materials
        renderer.toneMapping = THREE.ReinhardToneMapping;
        renderer.toneMappingExposure = 3;


        camera.position.z = 10
        camera.position.y = 10   
        camera.position.x = 10     
        renderer.render(scene, camera)
        // document.getElementById("module1").innerHTML = '';
        document.getElementById("module1").appendChild( renderer.domElement );     
        
        //!to set the camera in respect to the size of the window
        window.addEventListener('resize',function(){
            let width   = window.innerWidth;
            let height = window.innerHeight;
            renderer.setSize(width, height);
            camera.aspect=width/height;
            camera.updateProjectionMatrix();
        })
        let controls = new OrbitControls(camera, renderer.domElement);
        controls.update();
    
        // var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        // var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        // var cube = new THREE.Mesh( geometry, material );
        // scene.add( cube );
        // camera.position.z = 5;
        var animate = function () {
            if(model) model.rotation.y +=0.01;
            if(model) model.position.y +=0.01;
            camera.rotation.x +=0.0005;
            camera.rotation.z +=0.0005;
          requestAnimationFrame( animate );
          renderer.render( scene, camera );
        };
        animate();   
    }
        return (
        <div id="module1" className="module1">
            <div className="loadersSec" id="loadersSec">
                <p id="loaderpercent"></p>
                <progress  id="loaderRender" max="100"></progress>
                <p className="d3Env">Loading 3d environment</p>
            </div>
            <div className="instuctionScreen" id="instuctionScreen"
            onClick={
                (e)=>
                {document.getElementById("instuctionScreen").style.display = "none";
                document.getElementById("summ1").click();
                }
            }
            >
                <div>
                    <FontAwesomeIcon icon={faMouse}
                    className="mouseIcon1"
                    />
                    <p>
                        Drag mouse 
                    </p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faPlus} className="plusIcon"/>
                </div>
                <div>
                    <FontAwesomeIcon icon={faKeyboard}
                    className="keyboardIcon1"
                    />
                    <p>
                        Shift key
                    </p>
                </div>
            </div>
            <div className="mobileInstructions"
            id="mobileInstructions"
            onClick={
                (e)=>
                {document.getElementById("mobileInstructions").style.display = "none";
                document.getElementById("summ1").click();
                }
            }
            >
                <div>
                    <FontAwesomeIcon icon={faFingerprint}
                    className="handicon"
                    />
                    <p>
                        Drag 3d model
                    </p>
                </div>
            </div>
        </div>
    )
}
