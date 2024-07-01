import React, { useState, useContext, useEffect } from 'react';
import { MainContext } from '../../context/MainContext';
import {
  SkillEl,
  RenderedSkill,
  RenderedSkillBox,
  CardBack
} from '../../assets/styles/Skills.styled';
import useMultiPosts from '../../hooks/useMultiPosts';
import { Flipper, Flipped } from 'react-flip-toolkit';

const SkillElement = () => {
  const { language } = useContext(MainContext);
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

  return (
    <SkillEl>
      {posts.map((post) => {
        return (
          <RenderedSkillBox key={post?.id} flipped={flipped} content="text">
            <Flipper flipKey={flipped === post?.id}>
              <div
                onClick={() => handleFlip(post?.id)}
                className="flip-container"
              >
                <Flipped flipId="card">
                  <div
                    className={`card ${flipped === post?.id ? 'flipped' : ''}`}
                  >
                    <RenderedSkill
                      image={post?.image}
                      className="card-front"
                    ></RenderedSkill>
                    <div>
                    </div>
                    <div className="card-back">
                      <CardBack>
                    <h3>{post?.name}</h3>
                      <p
                        dangerouslySetInnerHTML={{ __html: language === 'pl' ? post?.learning_way_pl : post?.learning_way_en }}
                      />
                      </CardBack>
                    </div>
                  </div>
                </Flipped>
              </div>
            </Flipper>
          </RenderedSkillBox>
        );
      })}
    </SkillEl>
  );
};

export default SkillElement;
