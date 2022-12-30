import styled from 'styled-components';
import { space, layout, color } from 'styled-system';

export const Box = styled.div(
  { boxSizing: 'border-box', marginLeft: 'auto', marginRight: 'auto' },
  space,
  layout,
  color
);
