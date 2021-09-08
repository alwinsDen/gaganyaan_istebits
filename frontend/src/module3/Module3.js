import React,{useEffect} from 'react'
import "./Module3.css"
import * as THREE from 'three'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import filepath from './../models/mark1.glb'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faKeyboard, faMouse, faPlus} from "@fortawesome/free-solid-svg-icons"
export const Module3 = () => {
    useEffect(()=> {
        animation();
    },[]);
    const animation=()=> {
        const scene = new THREE.Scene()

        const imageLoader = new THREE.TextureLoader();
        const texture = imageLoader.load(
      'https://cdn.eso.org/images/publicationjpg/potw1105a.jpg',
      () => {
        const rt = new THREE.WebGLCubeRenderTarget(texture.image.height);
        rt.fromEquirectangularTexture(renderer, texture);
        scene.background = rt.texture;
      });
      const loader = new GLTFLoader();
        loader.load(filepath,function(gltf){
            console.log(gltf);
            const model = gltf.scene
            model.scale.set(.7,.7,.7)
            model.rotation.set(0,0,0)
            scene.add(model);
        }, (xhr) => {
            let loadNumber = (xhr.loaded/xhr.total*100).toString().slice(0,3);   
            document.getElementById("loaderpercent3").innerHTML = `${loadNumber+'%'}`
            document.getElementById("loaderRender3").value = (loadNumber === "Inf" ? 100 :parseInt(loadNumber));
            if (loadNumber == "Inf") document.getElementById("loadersSec3").style.display = 'none'; 
            const loaderDoc = document.getElementById("loadersSec3");
            if (loaderDoc !== null || loaderDoc !== undefined) {
                if (loadNumber === "Inf" || loadNumber==="100") 
                {
                    document.getElementById("loadersSec3").style.display = 'none';
                }

            }
        }, (error)=>{
            console.log(error);
        })
        const light = new THREE.DirectionalLight(0xffffff, 1)
        light.position.set(2,2,0)
        scene.add(light)
    
        const camera = new THREE.PerspectiveCamera(window.innerWidth >400 ?30 :45, window.innerWidth/480, 0.1, 1000)
        
        //lighting
        var width = 100;
        var height = 100;
        var intensity = 2;
        var rectLight = new THREE.RectAreaLight( 0xffffff, intensity,  width, height );
        rectLight.position.set( 1, 1, 10 );
        rectLight.lookAt( 1, 1, 3 );
        scene.add( rectLight )
    
        //rendering
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth-16,480);
        // console.log(camera.position.x);
        camera.position.z = 30
        camera.position.y = 110 
        camera.position.x = 220
        // camera.position.y = 10
        // camera.position.x = 9    
        renderer.render(scene, camera)
        // document.getElementById("module1").innerHTML = '';
        document.getElementById("module3").appendChild( renderer.domElement ); 
        window.addEventListener('resize',function(){
            let width   = window.innerWidth;
            let height = window.innerHeight;
            renderer.setSize(width, height);
            camera.aspect=width/height;
            camera.updateProjectionMatrix();
        })
        let controls = new OrbitControls(camera, renderer.domElement);
        controls.update();
        var animate = function () {
          requestAnimationFrame( animate );
          renderer.render( scene, camera );
        };
        animate();     
    }
    return (
        <div className="module3" id="module3">
             <div className="loadersSec3" id="loadersSec3">
                <p id="loaderpercent3"></p>
                <progress  id="loaderRender3" max="100"></progress>
                <p className="d3Env3">Loading 3d environment</p>
            </div>
        </div>
    )
}
