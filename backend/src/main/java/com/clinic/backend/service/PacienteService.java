package com.clinic.backend.service;

import com.clinic.backend.model.PacienteModel;

public interface PacienteService {

    Iterable<PacienteModel> buscarTodos();

    PacienteModel buscarPorId(Integer id);

    PacienteModel buscarPorCpf(String cpf);

    void inserir(PacienteModel Paciente);

    PacienteModel atualizar(Integer id, PacienteModel Paciente);

    void inativar(Integer id);

}
