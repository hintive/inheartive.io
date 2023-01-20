import { render } from '@inheartive/ui/testing';
import { ScrollView } from '../ScrollView';

describe('ScrollView', () => {
  it('should render successfully', () => {
    const { container } = render(<ScrollView />);
    expect(container).toBeTruthy();
  });
});
