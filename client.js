import {ReactInstance, Location, Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    ...options,
  });

  // Create three roots: two flat panels on the left and the right, and a Location
  // to mount rendered models in 3D space
  const leftPanel = new Surface(300, 600, Surface.SurfaceShape.Flat);
  leftPanel.setAngle(-0.7, 0);
  const middlePanel = new Surface(700, 600, Surface.SurfaceShape.Cylinder);
  middlePanel.setAngle(0, 0);
  const rightPanel = new Surface(300, 600, Surface.SurfaceShape.Flat);
  rightPanel.setAngle(0.7, 0);
  
  // Render serfaces 
  r360.renderToSurface(
    r360.createRoot('RoomList'),
    leftPanel,
  );
  r360.renderToSurface(
    r360.createRoot('RoomOptions'),
    rightPanel,
  );

  //IndexSurface.setShape(Surface.SurfaceShape.Flat);
  r360.renderToSurface(
    r360.createRoot('ChatRoom360'),
    middlePanel,
  )

  r360.compositor.setBackground(r360.getAssetURL('kris.jpg'));
}

window.React360 = {init};