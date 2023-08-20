<div style={{ paddingBottom: '400px' }}>
          <div className="inputGroup inputGroup1">
            <label htmlFor="loginEmail" id="loginEmailLabel" style={{ fontFamily: 'Robot' }}>
              Email
            </label>
            <input
              type="email"
              id="loginEmail"
              placeholder="Введите вашу почту"
              maxLength={256}
              name="email"
              autoComplete="off"
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '14px',
              }}
            />
          </div>

          <div className="inputGroup inputGroup2">
            <label htmlFor="loginPassword" id="loginPasswordLabel" style={{ fontFamily: 'Robot' }}>
              Password
            </label>
            <input
              type="password"
              id="loginPassword"
              name="password"
              placeholder="Введите ваш пароль"
              autoComplete="off"
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '14px',
              }}
            />
            <label id="showPasswordToggle" htmlFor="showPasswordCheck">
              show
              <input id="showPasswordCheck" type="checkbox" name="password" />
              <div className="indicator" />
            </label>
          </div>

          <div className="inputGroup inputGroup3">
            <button
              id="login"
              type="submit"
              style={{
                padding: '10px 20px',
                backgroundColor: '#FCA311',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '16px',
                cursor: 'pointer',
              }}
            >
              Войти
            </button>
          </div>
        </div>