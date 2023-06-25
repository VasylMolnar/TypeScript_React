/////////ReactElement
import React from 'react';

const element: React.ReactElement = <div>Hello, World!</div>;

export default element;

/////////ReactNode
import React from 'react';

const node: React.ReactNode = <div>Hello, World!</div>;

export default node;

/////////ReactComponent
import React from 'react';

type MyComponentProps = {
  name: string;
  age: number;
};

class MyComponent extends React.Component<MyComponentProps> {
  render() {
    return (
      <div>
        <p>Name: {this.props.name}</p>
        <p>Age: {this.props.age}</p>
      </div>
    );
  }
}

export default MyComponent;

/////////React.FC
import React from 'react';

type MyComponentProps = {
  name: string;
  age: number;
};

const MyComponent: React.FC<MyComponentProps> = ({ name, age }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default MyComponent;

/////////React.ComponentType
import React from 'react';

type MyComponentProps = {
  name: string;
  age: number;
};

const MyComponent: React.ComponentType<MyComponentProps> = ({ name, age }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default MyComponent;
