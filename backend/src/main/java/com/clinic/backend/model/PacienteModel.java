package com.clinic.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity
@Table(name = "paciente")
public class PacienteModel extends PessoaModel{

    @Column(length = 100)
    private String convenio;

    @Column(name = "numero_carteirinha", length = 50)
    private String numeroCarteirinha;

}
