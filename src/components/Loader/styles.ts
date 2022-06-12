import styled from 'styled-components/native';

export const LoaderComponent = styled.View`
  width: 150px;
  height: 150px;
  border-left: 5px solid #ff006e;
  border-radius: 50%;
  animation: rightrotate 900ms linear infinite;

    &&::before, ::after {
        content: '';
        width: 120px;
        height: 120px;
        display: block;
        position: absolute;
        top: calc(50% - 60px);
        left: calc(50% - 60px);
        border-radius: 50%;
        border-right: 4px solid #3a86ff;
        animation: leftrotate 900ms linear infinite;
    }

    &&::after {
        width: 90px;
        height: 90px;
        top: calc(50% - 45px);
        left: calc(50% - 45px);
        border: 0;
        border-left: 3px solid #ffbe0b;
        animation: none;
    }


    @keyframes leftrotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(720deg); }
    }

    @keyframes rightrotate {
        from { transform: rotate(360deg); }
        to { transform: rotate(0deg); }
    }
`;
