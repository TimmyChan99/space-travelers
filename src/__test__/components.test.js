import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Missions from '../components/missions/Missions';
import Mission from '../components/missions/Mission';
import Rocket from '../components/rocket/Rocket';
import RocketsList from '../components/rocketList/RocketsList';

it('Test if Missions renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Missions />
    </Provider>,
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
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});

it('Test if Rocket renders correctly', () => {
  const item = {
    description: 'description',
    image: 'https://test.com',
    name: 'Rocket',
    id: 1,
    reserved: false,
  };
  const tree = renderer.create(
    <Provider store={store}>
      <Rocket
        description={item.description}
        image={item.image}
        name={item.name}
        id={item.id}
        reserved={item.reserved}
      />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});

it('Test if Rockets List renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <RocketsList />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
