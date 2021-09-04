import React from 'react'
import "./Module1.css"
import * as THREE from 'three'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import filepath from './Perseverance.glb'

export const Module1 = () => {
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xdddddd);

    //!GLTF importing
    const loader = new GLTFLoader();
    loader.load(filepath,function(gltf){
        console.log(gltf);
        const model = gltf.scene
        model.scale.set(1,1,1)
        model.rotation.set(0,90,0)
        scene.add(model);
    }, (xhr) => {
         console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    }, (error)=>{
        console.log(error);
    })

    const light = new THREE.DirectionalLight(0xffffff, 1)
    light.position.set(2,2,5)
    scene.add(light)

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    
    //lighting
    var width = 100;
    var height = 100;
    var intensity = 1.4;
    var rectLight = new THREE.RectAreaLight( 0xffffff, intensity,  width, height );
    rectLight.position.set( 1, 1, 10 );
    rectLight.lookAt( 1, 1, 3 );
    scene.add( rectLight )

    //rendering
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    camera.position.z = 5
    renderer.render(scene, camera)
    document.body.appendChild( renderer.domElement );     
    
    

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
    return (
        <div>
            {/* <h1>Gaganyaan</h1> */}
        </div>
    )
}
