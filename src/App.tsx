import './App.scss';

function App() {
  return (
    <main>
      <ul className='list'>
        <li
          className='item'
          style={{ background: 'red', aspectRatio: '286/546' }}
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
            background: 'grey',
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
          style={{ background: 'green', aspectRatio: '286/546' }}
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
          style={{ background: 'red', aspectRatio: '286/247' }}
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
            background: 'grey',
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
            background: 'blue',
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
          style={{ background: 'black', aspectRatio: '286/247' }}
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
            background: 'orange',
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
