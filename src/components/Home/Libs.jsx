import React, { useContext } from 'react';
import useExpiriences from '../../hooks/useExpiriences';
import { MainContext } from '../../context/MainContext';
import { BE_URL } from '../../utils/URLS';
import { LibsStyle } from '../../assets/styles/Libs.styled';

const Libs = () => {
  const { expiriencesState } = useExpiriences(`${BE_URL()}/api/v1/libraries`);
  const { t, language } = useContext(MainContext);

  return (
    <LibsStyle>
        <div className='libs_container' >
      {expiriencesState.map((exp) => {
        return (
          <div key={exp.id}>
            {/* <h3>{exp.name}</h3> */}
            <img src={exp.image} alt={exp.name} />
            <p
              dangerouslySetInnerHTML={{
                __html: language === 'en' ? exp.description_en : exp.description_pl,
              }}
            />
          </div>
        );
      })}
      </div>
    </LibsStyle>
  );
};

export default Libs;
