import React,{useEffect} from 'react'
import "./Module5.css"
import * as THREE from 'three'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import filepath from './../models/Perseverance.glb'
import {useDispatch} from "react-redux"
import {model3ACT} from "../features/percentageState"
export const Module5 = () => {
    const dispatch = useDispatch();
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
            // console.log(gltf);
            const model = gltf.scene
            model.scale.set(1,1,1)
            model.rotation.set(0,0,0)
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
    
        const camera = new THREE.PerspectiveCamera(window.innerWidth >400 ?40 :45, window.innerWidth/480, 0.1, 1000)
        
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
        camera.position.z = 3
        camera.position.y = 5 
        camera.position.x = 3
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
