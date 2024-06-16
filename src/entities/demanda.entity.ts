export interface Demanda {
    id: number;
    codigo: string;
    nome: string;
    cpf_cnpj: string;
    cep: string;
    uf: string;
    cidade: string;
    bairro: string;
    logradouro: string;
    numero: string;
    telefone: string;
    especialidade: string;
    tipo_servico_id: number;
    observacao: string;
    status_id: number;
    data_atualizacao: Date;
    empresa_id: number;
    tipo_investigado_id: number;
    data_demanda: Date;
    escolha_anexo: string;
    usuario_criador_id: number;
    usuariio_distribuicao_id: number;
    id_area_empresa: number;
}