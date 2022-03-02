import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Missions from '../components/missions/Missions';
import Mission from '../components/missions/Mission';

it('Test if Missions renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Missions />
    </Provider>
  );
  expect(tree).toMatchSnapshot();
});

it('Test if Mission renders correctly', () => {
  const mission = {
    missionId: 1,
    missionName: 'test mission name',
    description: 'description',
  };
  const tree = renderer.create(
    <Provider store={store}>
      <Mission mission={mission} />
    </Provider>
  );
  expect(tree).toMatchSnapshot();
});
