export { Components, JSX } from './components';
import "@ionic/core";

import { setupConfig } from "@ionic/core";

export default () => {
  setupConfig({
    mode: "md"
  });
};
