const unityInstance = UnityLoader.instantiate(
  'unityContainer',
  'Build/Desktop.json',
  { onProgress: UnityProgress },
);
