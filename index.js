// @flow

import type { Bar } from './bar';

type Foo = {
	name?: string
}

export const inner = (props: { name: string }) => {
	return props.name.substr(0, 5);
};

export const outer = ({ name }: Foo & Bar) => {
	return inner({ name });
};