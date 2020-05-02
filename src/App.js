import React from 'react';
import './App.scss';
import CaptionSeaction from './components/CaptionSection/CaptionSection';
import PostList from './components/PostList/PostList';

function App() {
  return (
    <div className="app">
		<section className="section-images">
			<div className="container">
				<CaptionSeaction>
					<h1>Unsplash images</h1>
				</CaptionSeaction>
				<PostList />
			</div>
		</section>
    </div>
  );
}

export default App;
