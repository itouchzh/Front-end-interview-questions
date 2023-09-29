import * as THREE from 'three'
// 引入轨道控制器扩展库
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import Stats from 'three/examples/jsm/libs/stats.module.js'
import * as dat from 'dat.gui'

const gui = new dat.GUI()
// 1. 创建场景
const scene = new THREE.Scene()

// 3. 创建相机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000)

// 4. 创建渲染器
const renderer = new THREE.WebGLRenderer({
    // 设置抗锯齿属性
    antialias: true,
})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)
document.body.appendChild(renderer.domElement)

// 创建盒子样子
const geometry = new THREE.BoxGeometry(10, 10, 10)
// 创建材料，普通材料不会受到光照的影响，不会反光
const material = new THREE.MeshBasicMaterial({ color: 0x00ffff })
// 创建一个漫反射网络材质
// const material = new THREE.MeshLambertMaterial({
//     color: 0x00ffff,
//     transparent: true,
//     opacity: 0.5,
// })
// 建立一个网格，把盒子和样子都放在里面
// const cube = new THREE.Mesh(geometry, material)
// // 添加场景
// scene.add(cube)
// // 沿着x轴阵列
// for (let i = 0; i < 10; i++) {
//     const mesh = new THREE.Mesh(geometry, material)
//     mesh.position.set(i * 15, 0, 0)
//     scene.add(mesh)
// }

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        const mesh = new THREE.Mesh(geometry, material)
        mesh.position.set(i * 15, j * 15, 0)
        scene.add(mesh)
    }
}

// 相机的位置
camera.position.set(100, 100, 100)
// 相机对准哪里
camera.lookAt(0, 0, 0)

// 定义坐标轴
const axesHelper = new THREE.AxesHelper(100)
scene.add(axesHelper)

// 设置相机轨道控制器
const controls = new OrbitControls(camera, renderer.domElement)
// controls.addEventListener('change', function () {
//     renderer.render(scene, camera)
// })

// 添加光源
// 添加点光源
const pointLight = new THREE.PointLight(0xffffff, 1, 0, 0)
pointLight.position.set(60, 0, 0)
scene.add(pointLight)
// 可视化点光源
const pointLightHelper = new THREE.PointLightHelper(pointLight, 5)
scene.add(pointLightHelper)

// 添加状态看板
const stats = new Stats()
document.body.appendChild(stats.domElement)
function animate() {
    stats.update()
    requestAnimationFrame(animate)
    // cube.rotation.x += 0.01
    // cube.rotation.y += 0.01
    renderer.render(scene, camera)
}

animate()

window.onresize = function () {
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
}
