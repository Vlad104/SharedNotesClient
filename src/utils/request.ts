export default async function request(url: string, method = 'GET', body?: any) {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: getAccessToken(),
    },
    mode: 'cors' as RequestMode,
    credentials: 'include' as RequestCredentials,
    body: body ? JSON.stringify(body) : null,
  };

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error('Status error');
  }

  let contentType = response.headers.get('Content-Type');

  if (!contentType) {
    return;
  }

  contentType = contentType.toLowerCase();

  if (contentType.match('application/json')) {
    return response.json();
  }

  if (contentType.match('text/plain')) {
    return response.text();
  }
}

function getAccessToken() {
  const token = localStorage.getItem('accessToken');

  if (!token) {
    return '';
  }

  return `Bearer ${token}`;
}
