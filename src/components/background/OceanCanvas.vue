<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import * as THREE from 'three'

const canvasRef = ref<HTMLCanvasElement | null>(null)
let renderer: THREE.WebGLRenderer | null = null
let scene: THREE.Scene | null = null
let camera: THREE.PerspectiveCamera | null = null
let frame = 0
let rafId = 0
let points: THREE.Points | null = null

onMounted(() => {
  if (!canvasRef.value) {
    return
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  renderer = new THREE.WebGLRenderer({
    canvas: canvasRef.value,
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance',
  })

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100)
  camera.position.set(0, 1, 7)

  const geometry = new THREE.BufferGeometry()
  const count = prefersReducedMotion ? 220 : 520
  const positions = new Float32Array(count * 3)

  for (let i = 0; i < count; i += 1) {
    const i3 = i * 3
    positions[i3] = (Math.random() - 0.5) * 18
    positions[i3 + 1] = (Math.random() - 0.5) * 10
    positions[i3 + 2] = (Math.random() - 0.5) * 10
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

  const material = new THREE.PointsMaterial({
    color: '#0EA5E9',
    size: prefersReducedMotion ? 0.03 : 0.05,
    transparent: true,
    opacity: 0.7,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  })

  points = new THREE.Points(geometry, material)
  scene.add(points)

  const light = new THREE.PointLight('#D4AF37', 0.95, 16)
  light.position.set(1, 2, 4)
  scene.add(light)

  const onResize = () => {
    if (!renderer || !camera || !canvasRef.value) {
      return
    }

    const { clientWidth, clientHeight } = canvasRef.value
    renderer.setSize(clientWidth, clientHeight, false)
    camera.aspect = clientWidth / clientHeight
    camera.updateProjectionMatrix()
  }

  const animate = () => {
    if (!scene || !camera || !renderer || !points) {
      return
    }

    frame += prefersReducedMotion ? 0.001 : 0.003
    points.rotation.y = frame
    points.rotation.x = Math.sin(frame * 0.5) * 0.15

    renderer.render(scene, camera)
    rafId = requestAnimationFrame(animate)
  }

  window.addEventListener('resize', onResize)
  onResize()
  animate()

  onUnmounted(() => {
    window.removeEventListener('resize', onResize)

    if (rafId) {
      cancelAnimationFrame(rafId)
    }

    if (renderer) {
      renderer.dispose()
      renderer = null
    }

    if (points) {
      points.geometry.dispose()
      ;(points.material as THREE.Material).dispose()
      points = null
    }

    scene = null
    camera = null
  })
})
</script>

<template>
  <canvas ref="canvasRef" class="ocean-canvas" aria-hidden="true" />
</template>

<style scoped>
.ocean-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
</style>
