document.addEventListener('DOMContentLoaded', () => {
    // 1. Selecionando os novos campos do DOM
    const adminForm = document.getElementById('admin-form');
    const fullNameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const birthdateInput = document.getElementById('birthdate');
    const phoneInput = document.getElementById('phone');

    const userList = document.getElementById('user-list');
    const clearBtn = document.getElementById('clear-btn');
    const deleteAllBtn = document.getElementById('delete-all-btn');
    const searchInput = document.getElementById('search-input');

    const localStorageKey = 'users';

    // Função para buscar usuários do Local Storage
    const getUsers = () => {
        const users = localStorage.getItem(localStorageKey);
        return users ? JSON.parse(users) : [];
    };

    // Função para salvar usuários no Local Storage
    const saveUsers = (users) => {
        localStorage.setItem(localStorageKey, JSON.stringify(users));
    };

    // Função para renderizar a lista de usuários (ATUALIZADA)
    const renderUsers = (usersToRender) => {
        const users = usersToRender || getUsers();
        userList.innerHTML = '';

        if (users.length === 0) {
            userList.innerHTML = '<li>Nenhum usuário cadastrado.</li>';
            return;
        }

        users.forEach(user => {
            const li = document.createElement('li');
            li.setAttribute('data-id', user.id);

            // 2. Template atualizado para exibir mais informações
            li.innerHTML = `
                <span>
                    <strong>Nome:</strong> ${user.name} <br>
                    <strong>E-mail:</strong> ${user.email} <br>
                    <strong>Telefone:</strong> ${user.phone} <br>
                    <small>Cadastrado em: ${user.date}</small>
                </span>
                <button class="delete-item-btn" title="Excluir usuário">&times;</button>
            `;
            userList.appendChild(li);
        });
    };

    // Evento de submissão do formulário (ATUALIZADO)
    adminForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // 3. Capturando valores dos 5 campos
        const fullName = fullNameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const birthdate = birthdateInput.value;
        const phone = phoneInput.value.trim();

        // Validação simples
        if (!fullName || !email || !password || !birthdate || !phone) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        const users = getUsers();

        // 4. Criando o novo objeto de usuário com todos os dados
        const newUser = {
            id: Date.now(),
            name: fullName,
            email: email,
            password: password, // NOTA: Armazenar senhas em texto plano é inseguro!
            birthdate: birthdate,
            phone: phone,
            date: new Date().toLocaleString('pt-BR')
        };

        users.push(newUser);
        saveUsers(users);
        renderUsers();
        adminForm.reset();
    });

    // Função para limpar campos (NÃO PRECISA DE MUDANÇA)
    clearBtn.addEventListener('click', () => {
        adminForm.reset();
    });

    // Função para deletar um item (NÃO PRECISA DE MUDANÇA)
    userList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-item-btn')) {
            const userId = e.target.closest('li').getAttribute('data-id');
            if (confirm('Tem certeza que deseja excluir este usuário?')) {
                let users = getUsers();
                users = users.filter(user => user.id != userId);
                saveUsers(users);
                renderUsers();
            }
        }
    });

    // Função para deletar todos os itens (NÃO PRECISA DE MUDANÇA)
    deleteAllBtn.addEventListener('click', () => {
        if (confirm('Tem certeza que deseja excluir TODOS os usuários?')) {
            localStorage.removeItem(localStorageKey);
            renderUsers();
        }
    });

    // Função de pesquisa (ATUALIZADA)
    searchInput.addEventListener('keyup', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const users = getUsers();

        // 5. Pesquisa agora busca por nome, e-mail ou telefone
        const filteredUsers = users.filter(user =>
            user.name.toLowerCase().includes(searchTerm) ||
            user.email.toLowerCase().includes(searchTerm) ||
            user.phone.toLowerCase().includes(searchTerm)
        );

        renderUsers(filteredUsers);
    });

    // Renderiza a lista inicial ao carregar a página
    renderUsers();
});