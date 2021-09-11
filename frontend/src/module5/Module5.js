import React,{useEffect,useState} from 'react'
import "./Module5.css"
import * as THREE from 'three'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import filepath from './../models/paraVehicle.glb'
import {useDispatch} from "react-redux"
import {model3ACT} from "../features/percentageState"
export const Module5 = () => {
    const dispatch = useDispatch();
    const [timerTrigger, setTimetrigger] = useState(1);
    useEffect(()=> {
        animation();
        setTimeout(()=>setTimetrigger(state=>state+1)
        ,22000)
    },[timerTrigger]);
    const animation=()=> {
        let model,spotlight,hemilight;
        document.getElementById("module5").innerHTML="";
        const scene = new THREE.Scene()

        const imageLoader = new THREE.TextureLoader();
        const texture = imageLoader.load(
      'https://images.unsplash.com/photo-1617264133194-c313bd67df9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1789&q=80',
      () => {
        const rt = new THREE.WebGLCubeRenderTarget(texture.image.height);
        rt.fromEquirectangularTexture(renderer, texture);
        scene.background = rt.texture;
      });
      const loader = new GLTFLoader();
        loader.load(filepath,function(gltf){
            // console.log(gltf);
            model = gltf.scene
            model.scale.set(2,2,2)
            model.rotation.set(0,0,0)
            model.position.y = 20;
            scene.add(model);
        }, (xhr) => {
            let loadNumber = (xhr.loaded/xhr.total*100).toString().slice(0,3);
            dispatch(model3ACT(loadNumber));
        }, (error)=>{
            console.log(error);
        })
        const light = new THREE.DirectionalLight(0xffffff, 1)
        light.position.set(2,2,0)
        scene.add(light)
    
        // scene.add(new THREE.AxesHelper(500))

        const camera = new THREE.PerspectiveCamera(window.innerWidth >400 ?50 :60, window.innerWidth/480, 0.1, 1000)
        
        //lighting
        var width = 100;
        var height = 100;
        var intensity = 2;
        var rectLight = new THREE.RectAreaLight( 0xffffff, intensity,  width, height );
        rectLight.position.set( 1, 1, 10 );
        rectLight.lookAt( 1, 1, 3 );
        scene.add( rectLight )
        
        hemilight = new THREE.HemisphereLight(0xffeeb1,0x080820,2);
        scene.add(hemilight);
        spotlight = new THREE.SpotLight(0xffa95c, 4);
        spotlight.castShadow = true;
        scene.add(spotlight);
        //rendering
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth-16,480);
        // console.log(camera.position.x);

        renderer.toneMapping = THREE.ReinhardToneMapping;
        renderer.toneMappingExposure = 2.3;
        camera.position.z = 15
        camera.position.y = -15 
        camera.position.x = -15
        // camera.position.y = 10
        // camera.position.x = 9    
        renderer.render(scene, camera)
        // document.getElementById("module1").innerHTML = '';
        document.getElementById("module5").appendChild( renderer.domElement ); 
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
            if (model) model.position.y -= 0.09;
            camera.position.z += 0.01
            camera.position.y -= 0.05
            // camera.rotation.y += 0.01
          requestAnimationFrame( animate );
          renderer.render( scene, camera );
        };
        animate();     
    }
    return (
        <div className="module5" id="module5">
            
        </div>
    )
}
