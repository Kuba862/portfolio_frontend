import React, { useState, useContext } from 'react';
import { MainContext } from '../../context/MainContext';
import {
  Skill_el,
  Rendered_skill,
  Rendered_skill_box,
  Card_back
} from '../../assets/styles/Skills.styled';
import useMultiPosts from '../../hooks/useMultiPosts';
import { Flipper, Flipped } from 'react-flip-toolkit';

const Skill_element = () => {
  const { t, language } = useContext(MainContext);
  const { posts } = useMultiPosts('http://127.0.0.1:8000/api/v1/expiriences');
  const [flipped, setFlipped] = useState(null);

  const handleFlip = (id) => {
    if (flipped && flipped !== id) {
      setFlipped(null);
      setTimeout(() => setFlipped(id), 400);
    } else {
      setFlipped(flipped === id ? null : id);
    }
  };

  console.log(language)

  return (
    <Skill_el>
      {posts.map((post) => {
        return (
          <Rendered_skill_box key={post?.id} flipped={flipped}>
            <Flipper flipKey={flipped === post?.id}>
              <div
                onClick={() => handleFlip(post?.id)}
                className="flip-container"
              >
                <Flipped flipId="card">
                  <div
                    className={`card ${flipped === post?.id ? 'flipped' : ''}`}
                  >
                    <Rendered_skill
                      image={post?.image}
                      className="card-front"
                    ></Rendered_skill>
                    <div>
                    </div>
                    <div className="card-back">
                      <Card_back>
                    <h3>{post?.name}</h3>
                      <p
                        dangerouslySetInnerHTML={{ __html: language === 'pl' ? post?.learning_way_pl : post?.learning_way_en }}
                      />
                      </Card_back>
                    </div>
                  </div>
                </Flipped>
              </div>
            </Flipper>
          </Rendered_skill_box>
        );
      })}
    </Skill_el>
  );
};

export default Skill_element;
