const sessions = [];

function getAllSessions() {
    return sessions;
}

function addSession(sessao) {
    sessao.id = sessions.length + 1;
    sessions.push(sessao);
    return sessao;
}

module.exports = { getAllSessions, addSession };
