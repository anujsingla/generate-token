import React from 'react';
import { Container } from 'react-bootstrap';
import Griddle, { plugins, RowDefinition, ColumnDefinition } from 'griddle-react';

const data = [
  {
    id: 0,
    name: 'Mayer Leonard',
    city: 'Kapowsin',
    state: 'Hawaii',
  },
  {
    id: 1,
    name: 'anuj',
    city: 'Kapowsin',
    state: 'Hawaii',
  },
];

const NewLayout = ({ Table, Pagination, Filter }: any) => (
  <div>
    <Filter />
    <Table />
    <Pagination />
  </div>
);

export function ListToken() {
  return (
    <Container className="mt-4">
      <Griddle
        data={data}
        plugins={[plugins.LocalPlugin]}
        components={{
          Layout: NewLayout,
        }}
      >
        <RowDefinition>
          <ColumnDefinition id="id" title="ID" width={40} />
          <ColumnDefinition id="name" title="Name" width={200} />
          <ColumnDefinition id="city" title="City" width={100} />
        </RowDefinition>
      </Griddle>
    </Container>
  );
}
