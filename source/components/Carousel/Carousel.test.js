/** @format */

import React from 'react';
import { create, act } from 'react-test-renderer';

import { Carousel } from './Carousel';

import { videoItemMock } from './__mock__/videoItemMock';

describe('Carousel component', () => {
    let root, instance;
    
    const params = {
        data: [videoItemMock], 
        isLoading: false, 
        type: 'poster'
      };

      beforeEach(async () => {
        await act(async () => {
            root = create(<Carousel {...params} />);
        });
      
        instance = root.root;
      });
    
      it('should render component Carousel correctly', () => {
        expect(root).not.toBeNull();
      });

});
