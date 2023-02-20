const instance = axios.create({
	baseURL: process.env.VUE_APP_API_URL,
	timeout: 2500,
});

//Parameter Serializer( GET 배열 전달)
instance.defaults.paramsSerializer = paramObj => {
	const params = new URLSearchParams();
	for (const key in paramObj) {
		params.append(key, paramObj[key]);
	}
	return params.toString();
};

//Request 요청
const onRequest = config => {
	return config;
};

const onRequestError = error => {
	return Promise.reject(error);
};

instance.interceptors.request.use(onRequest, onRequestError);

//Response 처리
const onResponse = response => {
	if (response.data.code) {
		throw new Error();
	}
	return response;
};

const onResponseError = error => {
	if (error.response?.status === 500) {
		//status 값 분기 처리
	} else if (error.response?.status === 400) {
		alert('서버 오류로 인하여 이용이 불가능 합니다.');
	} else if (error.response?.status === 404) {
		alert('요청 하신 요청이 존재 하지 않습니다.');
	}

	return Promise.reject(error);
};

instance.interceptors.response.use(onResponse, onResponseError);

export default instance;
