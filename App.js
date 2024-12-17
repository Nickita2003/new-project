import React from 'react';
import { Container, Row, Col, Card, Button, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const posts = [
  {
    title: 'Пост 1',
    description: 'Описание поста 1.',
    imageUrl: 'https://via.placeholder.com/800x400?text=Post+Image'
  },
  {
    title: 'Workout',
    description: 'это уличные тренировки на оборудованных спортивных площадках или в любом подходящем месте на открытом воздухе.',
    imageUrl: 'https://s15.stc.yc.kpcdn.net/share/i/12/12645638/wr-960.webp'
  },
  // Добавляйте больше постов по необходимости...
];

function App() {
  return (
    <Container fluid className="mt-4">
      <Row>
        <Col lg={10} md={12}>
          <div id="posts-container">
            {posts.map((post, index) => (
              <Card key={index} className="mb-3">
                <Card.Img variant="top" src={post.imageUrl} />
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.description}</Card.Text>
                  <Dropdown align="end">
                    <Dropdown.Toggle variant="primary" id={`dropdown-basic-${index}`}>
                      Действия
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#">Редактировать</Dropdown.Item>
                      <Dropdown.Item href="#">Удалить</Dropdown.Item>
                      <Dropdown.Item href="#">Добавить в избранное</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
