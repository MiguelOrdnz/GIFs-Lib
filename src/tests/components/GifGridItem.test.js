import React from 'react'
import { shallow} from 'enzyme'
import { GifGridItem } from '../../components/GifGridItem'

describe('Testint <GifGridItem />>', () => {
    const id = ''
    const title = ''
    const url = ''
    const wrapper = shallow(<GifGridItem id = {id} title = {title} url = {url}/>)

    test('Match Snapshot', () => {
        expect( wrapper ).toMatchSnapshot();
    })
    
    it('Contain a paragrah with the title', () => {
        const p = wrapper.find('p')
        expect(wrapper.text().trim()).toBe(title)
    });
    
});
