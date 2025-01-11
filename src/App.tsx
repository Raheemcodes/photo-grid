import './App.scss';

function App() {
  return (
    <main>
      <ul className='list'>
        <li
          className='item'
          style={{ background: '#5A95CA', aspectRatio: '286/546' }}
        >
          <img
            width={1920}
            height={1536}
            src='/images/sea.webp'
            alt='Sea'
            loading='lazy'
          />
        </li>
        <li
          className='item'
          style={{
            background: '#605E4F',
            gridColumn: 'span 2',
          }}
        >
          <img
            width={1434}
            height={1920}
            src='/images/chun-li.webp'
            alt='Chun-li'
            loading='lazy'
          />
        </li>
        <li
          className='item'
          style={{ background: '#CD7D9D', aspectRatio: '286/546' }}
        >
          <img
            width={1500}
            height={1875}
            src='/images/var.webp'
            alt='Var'
            loading='lazy'
          />
        </li>
      </ul>

      <ul className='list collage'>
        <li
          className='item'
          style={{ background: '#5C0004', aspectRatio: '286/247' }}
        >
          <img
            width={1920}
            height={1280}
            src='/images/restaurant.webp'
            alt='Restaurant'
            loading='lazy'
          />
        </li>
        <li
          className='item'
          style={{
            background: '#955170',
            gridRow: 'span 2',
          }}
        >
          <img
            width={1446}
            height={1920}
            src='/images/astronaut.webp'
            alt='Astronaut'
            loading='lazy'
          />
        </li>
        <li
          className='item'
          style={{
            background: '#9D9B8E',
            gridColumn: 'span 2',
          }}
        >
          <img
            width={1500}
            height={1500}
            src='/images/bedroom.webp'
            alt='Bed room'
            loading='lazy'
          />
        </li>
        <li
          className='item'
          style={{ background: '#3A3529', aspectRatio: '286/247' }}
        >
          <img
            width={1446}
            height={1920}
            src='/images/var-baddie.webp'
            alt='Var Dark'
            loading='lazy'
            style={{ objectPosition: 'center 10%' }}
          />
        </li>
        <li
          className='item'
          style={{
            background: '#44584C',
            gridColumn: 'span 2',
          }}
        >
          <img
            width={1446}
            height={1920}
            src='/images/dark-mannequin.webp'
            alt='Dark mannequin'
            loading='lazy'
            style={{ objectPosition: 'center 10%' }}
          />
        </li>
      </ul>
    </main>
  );
}

export default App;
