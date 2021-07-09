import Aurelia, { RouterConfiguration} from 'aurelia';
import { MyApp } from './my-app';

import './main.scss';

Aurelia
  .register(RouterConfiguration.customize({ useUrlFragmentHash: false }))
  .app(MyApp)
  .start();
