const baseUrl = 'https://streetsrussia.sytes.net/api/v1';

interface AuthResponse {
  token?: string;
  message?: string;
  non_field_errors?: string[];
}

export async function postLogin(username: string, password: string): Promise<AuthResponse> {
    try {
        const payload = { username, password };

        let res = await fetch(`${baseUrl}/auth/login/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        });

        if (res.ok) {
            let data: AuthResponse = await res.json();
            return data;
        } else {
            let errorData: AuthResponse = await res.json();
            throw new Error(errorData.non_field_errors ? errorData.non_field_errors.join(', ') : 'Произошла ошибка');
        }
    } catch (err) {
        throw err; // Пробрасываем ошибку, чтобы ее можно было обработать выше
    }
}
