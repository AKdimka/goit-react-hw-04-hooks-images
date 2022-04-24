import { useState, useEffect } from "react";
import { MainContainer } from "./App.styled";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallary } from "./ImageGallery/ImageGallery";
import { Loader } from './Loader/Loader';
import { ShowMoreBtn } from "./Button/Button";
import { Modal } from "./Modal/Modal";

export default function App() {
	const [search, setSearch] = useState('');
	const [page, setPage] = useState(1);
	const [status, setStatus] = useState('idle');
	const [images, setImages] = useState([]);
	const [modalVisible, setModalVisible] = useState(false);
	const [modalImg, setModalImg] = useState('');
	const [modalAlt, setModalAlt] = useState('');

	useEffect(() => {
		setImages([])
	}, [search])

	useEffect(() => {
		const key = '25269285-81eb312f3fd9664086502c303';
		const pageNum = String(page);

		if (search !== '') {
			setStatus('pending');
			fetch(`https://pixabay.com/api/?q=${search}&page=${pageNum}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`)
				.then(r => r.json())
				.then(imgs => setImages(state => [...state, ...imgs.hits]))
				.finally(() => setStatus('resolve'))
		}
	}, [search, page])

	const openModal = (bigImg, alt) => {
		setModalImg(bigImg);
		setModalAlt(alt);
		setModalVisible(state => !state.modalVisible);
	}

	return (
		<MainContainer>
			<Searchbar setPage={setPage} setSearch={setSearch} />
			{status === 'idle' && <h1>Что будем искать???</h1>}
			{status === 'resolve' && <ImageGallary imgs={images} openModal={openModal} />}
			{status === 'pending' && <Loader />}
			{images.length !== 0 && <ShowMoreBtn setPage={setPage} />}
			{modalVisible && <Modal onClose={setModalVisible} img={modalImg} alt={modalAlt} />}
		</MainContainer>
	)
};