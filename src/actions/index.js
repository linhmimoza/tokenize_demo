import * as UserActions from './UserActions';
import * as HomeActions from './HomeActions';
import * as GeneralActions from './GeneralActions';

export default {
  ...UserActions,
  ...HomeActions,
  ...GeneralActions,
};
