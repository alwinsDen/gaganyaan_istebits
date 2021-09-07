import React,{useEffect} from 'react'
import "./Module1.css"
import * as THREE from 'three'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import filepath from './Perseverance.glb'

export const Module1 = () => {
    useEffect(()=>
    {
        animation();
    },[])
    const animation=()=> {
        const scene = new THREE.Scene()
        scene.background = new THREE.Color('grey');
    
        //!GLTF importing
        const loader = new GLTFLoader();
        loader.load(filepath,function(gltf){
            console.log(gltf);
            const model = gltf.scene
            model.scale.set(1,1,1)
            model.rotation.set(0,0,0)
            scene.add(model);
        }, (xhr) => {
             console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        }, (error)=>{
            console.log(error);
        })
    
        const light = new THREE.DirectionalLight(0xffffff, 1)
        light.position.set(2,2,0)
        scene.add(light)
    
        const camera = new THREE.PerspectiveCamera(35, window.innerWidth/480, 0.1, 1000)
        
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
        camera.position.z = 3
        camera.position.y = 5   
        camera.position.x = 3  
        renderer.render(scene, camera)
        // document.getElementById("module1").innerHTML = '';
        document.getElementById("module1").appendChild( renderer.domElement );     
        
        //!to set the camera in respect to the size of the window
        window.addEventListener('resize',function(){
            let width = window.innerWidth;
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
          requestAnimationFrame( animate );
          renderer.render( scene, camera );
        };
        animate();   
    }
        return (
        <div id="module1" className="module1">
            {/* <p>This is a test line...</p>
            <p>herror</p> */}
        </div>
    )
}
