import React,{useEffect} from 'react'
import * as THREE from 'three'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import filepath from './../models/gaganyaan vehicle.glb'
export const FullModule1 = () => {
    useEffect(()=> {
        animation();
    },[]);
    const animation=()=> {
        let hemiLight, spotlight, model;
        const scene = new THREE.Scene()
        const imageLoader = new THREE.TextureLoader();
        const texture = imageLoader.load(
      'https://cdn.eso.org/images/publicationjpg/uhd_img7796pv2_cc_eq.jpg',
      () => {
        const rt = new THREE.WebGLCubeRenderTarget(texture.image.height);
        rt.fromEquirectangularTexture(renderer, texture);
        scene.background = rt.texture;
      });
      const loader = new GLTFLoader();
        loader.load(filepath,function(gltf){
            // console.log(gltf);
            model = gltf.scene
            model.scale.set(1,1,1)
            model.rotation.set(0,0,0)
            scene.add(model);
        }, (xhr) => {
            
        }, (error)=>{
            console.log(error);
        })
        const light = new THREE.DirectionalLight(0xffffff, 1)
        light.position.set(2,2,0)
        scene.add(light)
    
        const camera = new THREE.PerspectiveCamera(40, window.innerWidth/480, 0.1, 1000)
        
        //lighting
        var width = 100;
        var height = 100;
        var intensity = 2;
        var rectLight = new THREE.RectAreaLight( 0xffffff, intensity,  width, height );
        rectLight.position.set( 1, 1, 10 );
        rectLight.lookAt( 1, 1, 3 );
        scene.add( rectLight )

        hemiLight = new THREE.HemisphereLight(0xffeeb1,0x080820,2);
        scene.add(hemiLight);
        spotlight = new THREE.SpotLight(0xffa95c, 4);
        spotlight.castShadow = true;
        spotlight.position.y = -20;
        spotlight.position.x = 20;
        scene.add(spotlight);
    
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
        document.getElementById("fullModule1").appendChild( renderer.domElement ); 
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
        id="fullModule1"
        >
        </div>
    )
}
