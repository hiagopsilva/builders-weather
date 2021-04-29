import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { Home } from './scenes';

const Routes = createAppContainer(createSwitchNavigator({ Home }));

export default Routes;
