const baseUrl = 'https://streetsrussia.sytes.net/api/v1';

interface AuthResponse {
  token?: string;
  message?: string;
  non_field_errors?: string[];
}

export interface UserAccount {
  email: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  date_of_birth?: string | null;
  phone_number: string;
  city: string;
  passport_series: string;
  passport_number: string;
  passport_issue_date?: string | null;
  passport_issued_by: string;
  consent_to_rights: boolean;
  consent_to_processing: boolean;
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

export async function postRegister(data: UserAccount): Promise<AuthResponse> {
  try {
    console.log("Отправка данных на сервер:", data);
    let res = await fetch(`${baseUrl}/auth/signup/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const responseBody = await res.json();
    console.log("Статус ответа:", res.status);
    console.log("Заголовки ответа:", res.headers);
    console.log("Ответ сервера:", responseBody);

    if (res.ok) {
      return responseBody;
    } else {
      let errorMessage = 'Произошла ошибка';
      if (responseBody.first_name) errorMessage = responseBody.first_name.join(', ');
      else if (responseBody.last_name) errorMessage = responseBody.last_name.join(', ');
      else if (responseBody.middle_name) errorMessage = responseBody.middle_name.join(', ');
      else if (responseBody.date_of_birth) errorMessage = responseBody.date_of_birth.join(', ');
      throw new Error(errorMessage);
    }
  } catch (err) {
    console.error("Ошибка регистрации:", err);
    throw err instanceof Error ? err : new Error('Произошла ошибка');
  }
}
