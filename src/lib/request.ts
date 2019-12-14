// Пример реализации функции запроса на сервер
export async function request<T>(endpoint: string, params: {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE',
    body?: any,
    headers?: Headers,
} = {}): Promise<T> {
    const response = await fetch(endpoint, {
        ...params
    });
    switch (response.status) {
        case 200:
        case 201: {
            return await response.json();
        }
        default: {
            throw {
                error: {
                    code: response.status,
                    desc: response.statusText
                }
            };
        }
    }
}
