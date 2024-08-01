import React from 'react';
import { Handle } from '@xyflow/react';
import { Node } from './CustomNode.styled';

const CustomNode = ({ data }) => {
  return (
    <Node>
      <div>
        <img
          src={data.image}
          alt={data.label}
          style={{ width: '150px', height: '150px', borderRadius: '50%' }}
        />
      </div>
      <div style={{ marginTop: 10 }}>
        <strong>{data.label}</strong>
      </div>
      <Handle type="source" position="bottom" />
      <Handle type="target" position="top" />
    </Node>
  );
};

export default CustomNode;
