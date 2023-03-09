const Floor = (props) => {
  return (
    <mesh {...props} receiveShadow>
      <boxBufferGeometry args={[20, 1, 20]} />
      <meshPhysicalMaterial />
    </mesh>
  );
};

export default Floor;
