import React,{useEffect} from 'react'
import * as THREE from 'three'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import filepath from './../models/paraVehicle.glb'
export const FullModule3 = () => {
    useEffect(()=> {
        animation();
    },[]);
    const animation=()=> {
        let model;

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
            model.scale.set(1.5,1.5,1.5)
            model.rotation.set(0,0,0)
            model.position.y = -5;
            scene.add(model);
        }, (xhr) => {
            
        }, (error)=>{
            console.log(error);
        })
        const light = new THREE.DirectionalLight(0xffffff, 1)
        light.position.set(2,2,0)
        scene.add(light)
    
        const camera = new THREE.PerspectiveCamera(70, window.innerWidth/480, 0.1, 1000)
        
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
        renderer.setSize( window.innerWidth,window.innerHeight-1);
        // console.log(camera.position.x);
        camera.position.z = 10
        camera.position.y = 10 
        camera.position.x = 10
        // camera.position.y = 10
        // camera.position.x = 9    
        renderer.render(scene, camera)
        // document.getElementById("module1").innerHTML = '';
        document.getElementById("fullModule3").appendChild( renderer.domElement ); 
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
        if (model) model.rotation.y += 0.01;
          requestAnimationFrame( animate );
          renderer.render( scene, camera );
        };
        animate();     
    }
    return (
        <div
        style={{
            // width: '100vw',
            // heigth: '100vh',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}
        id="fullModule3"
        >
        </div>
    )
}
